"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start):
        '''Start generator with same value in two different variables.'''
        self.start = start
        self.next = start

    def generate(self):
        '''First func call generates subsquent number(101) and returns (101 - 1) for 100.
            Each time the func is called, it will generate the subsequent number.
        '''
        self.next += 1
        return self.next - 1

    def reset(self):
        '''Reseting current sequence to the default value of start.'''
        self.next = self.start

    def repr(self):
        return f'<SerialGenerator start={self.start} next={start.next}>'
