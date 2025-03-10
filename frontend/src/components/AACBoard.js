import React, { useState } from 'react';

function AACBoard({ onItemClick }) {
    //hard coding here for now, should be in its own file later
    //images from https://www.opensymbols.org/
    const foodItems = [
        { id: 1, name: 'Burger', image: '/images/burger.png', audio: '/audio/burger.mp3' },
        { id: 2, name: 'Bottom Bun', image: '/images/bottom_bun.png', audio: '/audio/bottom_bun.mp3' },
        { id: 3, name: 'Top Bun', image: '/images/top_bun.png', audio: '/audio/top_bun.mp3' },
        { id: 4, name: 'Patty', image: '/images/patty.png', audio: '/audio/patty.mp3' },
        { id: 6, name: 'Lettuce', image: '/images/lettuce.png', audio: '/audio/lettuce.mp3' },
        { id: 7, name: 'Onion', image: '/images/onion.png', audio: '/audio/onion.mp3' },
        { id: 8, name: 'Tomato', image: '/images/tomato.png', audio: '/audio/tomato.mp3' },
        { id: 9, name: 'Ketchup', image: '/images/ketchup.png', audio: '/audio/ketchup.mp3' },
        { id: 10, name: 'Mustard', image: '/images/mustard.png', audio: '/audio/mustard.mp3' },
        { id: 11, name: 'Cheese', image: '/images/cheese.png', audio: '/audio/cheese.mp3' },
    ];

    const [selectedItems, setSelectedItems] = useState([]);
    const handleClick = (item) => {
        if (item.audio) {
            const audio = new Audio(item.audio);
            audio.play().catch((err) => {
                console.error('Audio playback failed:', err);
            });
        }

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
    const handlePlayAll = async () => {
        for (const item of selectedItems) {
            if (item.audio) {
                const audio = new Audio(item.audio);
                await new Promise((resolve) => {
                    audio.onended = resolve;
                    audio.onerror = resolve;
                    audio.play().catch((err) => {
                        console.error('Audio playback failed:', err);
                        resolve();
                    });
                });
            }
        }
    }

    return (
        <div style={{ padding: '1rem' }}>
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
                                    fontSize: '1.1rem',
                                }}
                            >
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            width: '30px',
                                            height: '30px',
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
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    ×
                                </button>
                            </span>
                        ))}
                        <div style={{ marginTop: '0.75rem' }}>
                            <button
                                onClick={handlePlayAll}
                                style={{
                                    marginRight: '0.5rem',
                                    padding: '0.5rem 1rem',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                }}
                            >
                                Play All
                            </button>
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
