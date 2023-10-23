def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """

    count = {}

    for ltr in phrase:
        if ltr in count:
            count[ltr] += 1
        else:
            count[ltr] = 1

    return count

print(multiple_letter_count('yay'))