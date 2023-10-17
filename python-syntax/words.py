def print_upper_words(strs):
  '''
  Print a list of words on a seperate line in all uppercase.
  '''

  for str in strs:
    if str.lower().startswith('e'):
      print(str.upper())
    elif str.lower().startswith(('h', 'y')):
      print(str.upper())

print_upper_words(['Help', 'Every', 'Great', 'Each'])  
print_upper_words(["hello", "hey", "goodbye", "yo", "yes"])