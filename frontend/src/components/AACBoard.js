import React, { useState } from 'react';

function AACBoard({ onItemClick }) {
    //hard coding here for now, should be in its own file later
    //images from https://www.opensymbols.org/
    const foodItems = [
        { id: 1, name: 'Burger', image: '/images/burger.png' },
        { id: 2, name: 'Bottom Bun', image: '/images/bottom_bun.png' },
        { id: 3, name: 'Top Bun', image: '/images/top_bun.png' },
        { id: 4, name: 'Patty', image: '/images/patty.png' },
        { id: 6, name: 'Lettuce', image: '/images/lettuce.png' },
        { id: 7, name: 'Onion', image: '/images/onion.png' },
        { id: 8, name: 'Tomato', image: '/images/tomato.png' },
        { id: 9, name: 'Ketchup', image: '/images/ketchup.png' },
        { id: 10, name: 'Mustard', image: '/images/mustard.png' },
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
            {/* Selected items display */}
            <div style={{ marginBottom: '1rem', fontWeight: 'bold', minHeight: '100px' }}>
                {selectedItems.length === 0 ? (
                    <p>Click an item to add it here!</p>
                ) : (
                    <div>
                        {selectedItems.map((item, index) => (
                            <span
                                key={index}
                                style={{
                                    marginRight: '0.75rem',
                                    padding: '0.5rem 0.75rem',
                                    border: '2px solid #ccc',
                                    borderRadius: '6px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    fontSize: '1.2rem',
                                }}
                            >
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            marginRight: '0.5rem',
                                            objectFit: 'contain',
                                        }}
                                    />
                                )}
                                {item.name}
                                <button
                                    onClick={() => handleDelete(index)}
                                    style={{
                                        marginLeft: '0.5rem',
                                        cursor: 'pointer',
                                        border: 'none',
                                        background: 'transparent',
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem',
                                    }}
                                >
                                    ×
                                </button>
                            </span>
                        ))}
                        <div style={{ marginTop: '0.75rem' }}>
                            <button
                                onClick={handleClear}
                                style={{
                                    padding: '0.5rem 1rem',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                }}
                            >
                                Clear All
                            </button>
                        </div>
                    </div>
                )}
            </div>

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
                            minHeight: '120px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {item.image && (
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    marginBottom: '0.5rem',
                                    objectFit: 'contain',
                                }}
                            />
                        )}
                        <span>{item.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default AACBoard;
