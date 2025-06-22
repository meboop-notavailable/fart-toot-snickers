import time
import random

secret_number = random.randint(1, 10)
Guess_count = 0
guess_limit = 5
attempts = 0
start_time = time.time()

while Guess_count < guess_limit:
    guess = int(input('Guess: '))
    Guess_count += 1
    attempts += 1
    if guess == secret_number:
        end_time = time.time()
        elapsed_time = end_time - start_time
        print('You Won!')
        print(f"Time taken: {elapsed_time:.2f} seconds")
        break
    elif guess < secret_number:
        print('Too low! Try again.')
    else:
        print('Too high! Try again.')
else:
    end_time = time.time()
    elapsed_time = end_time - start_time
    print('Sorry you Failed! You took', attempts, 'attempts. The secret number was', secret_number)
    print(f"Time taken: {elapsed_time:.2f} seconds")