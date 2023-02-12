import cohere
import sys

f = open("./secrets.txt", "r")
secret = f.read()
f.close()

co = cohere.Client(secret)

def main(prompt):
    response = co.generate(
        prompt = prompt,
        model = "command-medium-nightly",
        max_tokens = 1000,
        temperature = 0.25
    )

    return response.generations[0].text

if __name__ == "__main__":
    main(str(sys.argv[1]))
