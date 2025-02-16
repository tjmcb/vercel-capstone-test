def make_deck(x):
    '''
    Makes a deck composing of x of each card

    Parameters:
        x (int): The amount of each card to add to deck
    '''

    # Single character representation of a deck of cards, no suits
    cards = ["A","2","3","4","5","6","7","8","9","T","J","Q","K"]

    # Add x of each card to deck
    deck = []
    
    for card in cards:
        for i in range(x):
            deck.append(card)

    return deck