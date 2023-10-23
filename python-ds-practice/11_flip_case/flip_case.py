def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    flip = ''

    for ltr in phrase:
        if ltr.lower() == to_swap.lower():
            ltr = ltr.swapcase()
        flip += ltr

    return flip

print(flip_case('Aaaahhh', 'a'))
print(flip_case('Aaaahhh', 'A'))
