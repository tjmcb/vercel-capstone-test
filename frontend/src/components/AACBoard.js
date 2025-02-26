import React, { useState } from 'react';

function AACBoard({ onItemClick }) {
    //hard coding here for now, should be in its own file later

    const foodItems = [
        { id: 1, name: 'Burger' },
        { id: 2, name: 'Bottom Bun' },
        { id: 3, name: 'Top Bun' },
        { id: 4, name: 'Patty' },
        { id: 6, name: 'Lettuce' },
        { id: 7, name: 'Onion' },
        { id: 8, name: 'Tomato' },
        { id: 9, name: 'Ketchup' },
        { id: 10, name: 'Mustard' },
    ];
    const [selectedItems, setSelectedItems] = useState([]);

    const handleClick = (item) => {
        setSelectedItems((prev) => [...prev, item]);
        if (onItemClick) {
            onItemClick(item.name);
        }
    };

    const handleDelete = (indexToDelete) => {
        setSelectedItems((prev) =>
            prev.filter((_, index) => index !== indexToDelete)
        );
    };

    const handleClear = () => {
        setSelectedItems([]);
    };

    return (
        <div style={{ padding: '1rem' }}>
            {/* Selected items area */}
            <div style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                {selectedItems.length === 0 ? (
                    <p>Click an item to add it here!</p>
                ) : (
                    <div>
                        {selectedItems.map((item, index) => (
                            <span
                                key={index}
                                style={{
                                    marginRight: '0.5rem',
                                    padding: '0.2rem 0.5rem',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                }}
                            >
                                {item.name}
                                <button
                                    onClick={() => handleDelete(index)}
                                    style={{
                                        marginLeft: '0.3rem',
                                        cursor: 'pointer',
                                        border: 'none',
                                        background: 'transparent',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    ×
                                </button>
                            </span>
                        ))}
                        <div style={{ marginTop: '0.5rem' }}>
                            <button
                                onClick={handleClear}
                                style={{
                                    padding: '0.3rem 0.8rem',
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                }}
                            >
                                Clear All
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Grid of food items */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                    gap: '1rem',
                }}
            >
                {foodItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleClick(item)}
                        style={{
                            padding: '0.5rem',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            minHeight: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default AACBoard;
