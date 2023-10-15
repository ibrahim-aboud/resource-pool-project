"use client"
import { useState } from 'react';

export default function AddLinkPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            title,
            description,
            link,
            category,
        };

        const response = await fetch('/api/links', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('Link added successfully!');
        } else {
            console.error('Failed to add link.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            </label>
            <br />
            <label>
                Description:
                <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
            </label>
            <br />
            <label>
                Link:
                <input type="text" value={link} onChange={(event) => setLink(event.target.value)} />
            </label>
            <br />
            <label>
                Category:
                <select value={category} onChange={(event) => setCategory(event.target.value)}>
                    <option value="">Select a category</option>
                    <option value="Developing Skills">Developing Skills</option>
                    <option value="Creation">Creation</option>
                    <option value="Quick Tools">Quick Tools</option>
                    <option value="Discover the internet">Discover the internet</option>
                    <option value="Free to use Data Banks">Free to use Data Banks</option>
                    <option value="Simulation">Simulation</option>
                </select>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}
