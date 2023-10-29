"""Word Finder: finds random words from a dictionary."""

import random

class WordFinder:
    '''Looks through a list of words and picks one randomly.

   
    >>> words = WordFinder("/home/eric/ex/python-oo-practice/someWords.txt")
    4 words read

    >>> words.random() in ['Hey', 'Hello', 'Bye', 'Goodbye']
    True

    '''

    def __init__(self, path):
        '''Loads text file and reads the amount of words contained.'''
        file = open(path)
        self.dict = self.parse(file)
        print(f'{len(self.dict)} words read')
    
    def parse(self, file):
        '''Converts the text file to list.'''
        return [word.strip() for word in file]

    def random(self):
        '''Randomly selects a word from list.'''
        return random.choice(self.dict)
    

class SpecialWordFinder(WordFinder):
    '''Looks through a list of words, but only includes words that do not start with special characters.

    >>> spwords = SpecialWordFinder("/home/eric/ex/python-oo-practice/specialWords.txt")
    1 words read

    >>> spwords.random() in ['Kiwi']
    True

    '''

    def parse(self, file):
        '''Converts the text file to list, but does not include ones that start with #.'''
        return [word.strip() for word in file 
                if word.strip() and not word.startswith("#")]

