import React, { useState, useEffect } from "react";
import {
    Container,
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";
import { FaEdit, FaTrash } from "react-icons/fa";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Kontakt = () => {
    const [contacts, setContacts] = useState([]);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [editingContact, setEditingContact] = useState(null);
    const [form, setForm] = useState({ name: "", email: "", phone: "" });
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);
    const [sortBy, setSortBy] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        const savedContacts = JSON.parse(localStorage.getItem("contacts"));
        if (savedContacts) {
            setContacts(savedContacts);
        }
    }, []);

    useEffect(() => {
        if (contacts.length > 0) {
            localStorage.setItem("contacts", JSON.stringify(contacts));
        }
    }, [contacts]);

    const handleOpen = (contact = null) => {
        setEditingContact(contact);
        setForm(contact || { name: "", email: "", phone: "" });
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (value) => {
        setForm({ ...form, phone: value });
    };

    const handleSave = () => {
        if (!form.name || !form.email || !form.phone) return;

        if (editingContact) {
            setContacts(
                contacts.map((c) => (c === editingContact ? { ...form } : c))
            );
        } else {
            setContacts([...contacts, form]);
        }
        handleClose();
    };

    const handleDeleteConfirmation = (contact) => {
        setContactToDelete(contact);
        setDeleteDialogOpen(true);
    };

    const handleDelete = () => {
        if (contactToDelete) {
            setContacts(contacts.filter((c) => c !== contactToDelete));
        }
        setDeleteDialogOpen(false);
    };

    const handleCancelDelete = () => {
        setDeleteDialogOpen(false);
    };

    const handleSort = (field) => {
        const order = sortBy === field && sortOrder === "asc" ? "desc" : "asc";
        const sortedContacts = [...contacts].sort((a, b) => {
            if (a[field] < b[field]) return order === "asc" ? -1 : 1;
            if (a[field] > b[field]) return order === "asc" ? 1 : -1;
            return 0;
        });
        setContacts(sortedContacts);
        setSortBy(field);
        setSortOrder(order);
    };

    const filteredContacts = contacts.filter(
        (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Container sx={{ mt: 4 }}>
            <h2 style={{ marginBottom: "10px", fontSize: "24px" }}>Kontaktlar</h2>
            <TextField
                label="Qidirish"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button
                variant="outlined"
                color="primary"
                onClick={() => handleOpen()}
            >
                Kontakt qo‘shish
            </Button>
            <TableContainer component={Paper} sx={{ mt: 2, borderRadius: 2, overflow: "hidden" }}>
                <Table>
                    <TableHead sx={{ bgcolor: "#1976d2" }}>
                        <TableRow>
                            <TableCell
                                sx={{ color: "white", fontWeight: "bold", cursor: "pointer" }}
                                onClick={() => handleSort("name")}
                            >
                                Ism
                            </TableCell>
                            <TableCell
                                sx={{ color: "white", fontWeight: "bold", cursor: "pointer" }}
                                onClick={() => handleSort("email")}
                            >
                                Email
                            </TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Telefon</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
                                Amallar
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredContacts.map((contact, index) => (
                            <TableRow key={index} sx={{ "&:nth-of-type(odd)": { bgcolor: "#f5f5f5" } }}>
                                <TableCell>{contact.name}</TableCell>
                                <TableCell>{contact.email}</TableCell>
                                <TableCell>{contact.phone}</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>
                                    <Button
                                        color="primary"
                                        onClick={() => handleOpen(contact)}
                                        sx={{ minWidth: "40px", mr: 1 }}
                                    >
                                        <FaEdit size={18} />
                                    </Button>
                                    <Button
                                        color="error"
                                        onClick={() => handleDeleteConfirmation(contact)}
                                        sx={{ minWidth: "40px" }}
                                    >
                                        <FaTrash size={18} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Deled Modal */}
            <Dialog open={deleteDialogOpen} onClose={handleCancelDelete}>
                <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
                    Kontaktni o‘chirishni tasdiqlaysizmi?
                </DialogTitle>
                <DialogActions sx={{ justifyContent: "center", paddingBottom: "20px" }}>
                    <Button onClick={handleCancelDelete} color="info" variant="outlined">
                        ❌ Bekor qilish
                    </Button>
                    <Button onClick={handleDelete} color="error" variant="contained">
                        🗑️ O‘chirish
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
                    {editingContact ? "Kontaktni tahrirlash" : "Yangi kontakt"}
                </DialogTitle>
                <DialogContent sx={{ padding: "20px", minWidth: "350px" }}>
                    <TextField
                        label="Ism"
                        name="name"
                        fullWidth
                        margin="normal"
                        value={form.name}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        fullWidth
                        margin="normal"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <ReactPhoneInput
                        country={"uz"}
                        value={form.phone}
                        onChange={handlePhoneChange}
                        inputStyle={{
                            width: "100%",
                            padding: "25px",
                            paddingLeft: "45px",
                            fontSize: "16px",
                        }}
                    />
                </DialogContent>
                <DialogActions sx={{ justifyContent: "center", paddingBottom: "20px" }}>
                    <Button onClick={handleClose} sx={{ color: "red" }}>
                        ❌ Bekor qilish
                    </Button>
                    <Button onClick={handleSave} color="primary" variant="contained">
                        💾 Saqlash
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Kontakt;
