import cohere
import sys

co = cohere.Client("l0HLaS69csw8P2CKRN34mNlJrCa2sbRgC9tOTmmX") # Secrets in code are bad!

def main(prompt):
    response = co.generate(
        prompt = prompt,
        model = "command-medium-nightly",
        max_tokens = 1000
    )

    print(response.generations[0].text)

if __name__ == "__main__":
    main(str(sys.argv[1]))
