"""
Python program for conversion of txt data to list
Author: David Pape Jr
Date: February 25, 2022
"""
import random

def formatFile(inFile, outFile): # format one word per line
    with open(inFile) as file:
        words = file.readline().split()
    file.close()
    with open(outFile, "w") as output:
        for word in words:
            output.write(word + "\n")
    
def randomWord( inFile ): # choose word from file
    with open(inFile) as file:
        lines = file.read().splitlines()
        return random.choice(lines).strip()
    file.close()
    
def randomSpace( ): # generate random spacing
    length = random.randrange(8, 64)
    return " "*length

def erasure( num, inFile ):
    for i in range(1, num+1):
        line = randomSpace() + randomWord(inFile)
        while len(line) < 64:
            line += randomSpace() + randomWord(inFile)
        print(line)
        line = ""

if __name__ == "__main__":
    erasure( 64, "output.txt" )