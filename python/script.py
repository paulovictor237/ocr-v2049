# example.py

def add(a, b):
    return a + b

# Call the add function with arguments passed from Node.js
import sys
if __name__ == "__main__":
    print(add(int(sys.argv[1]), int(sys.argv[2])))
