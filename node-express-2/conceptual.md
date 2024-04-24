### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  Json Web Token is used to store and transfer data between two parties.

- What is the signature portion of the JWT? What does it do?
  Having a signature portion stops outside parties from altering your data.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, the payload can be decoded and the data can be seen by anyone.

- How can you implement authentication with a JWT? Describe how it works at a high level.
  By utilizing a secret key, the jwt signature can be matched and proceed with authenicating the jwt.

- Compare and contrast unit, integration and end-to-end tests.
  Integration testing is used for testing 2 seperate sections/functions together. While end to end testing is used for testing the app as a whole.

- What is a mock? What are some things you would mock?
  Mocks are used for testing purposes such as a mock api that would allow faster test to be ran.

- What is continuous integration?
  Making small and frequent changes to the code over time.

- What is an environment variable and what are they used for?
  Environment variable are used to configurate how an app is ran. For example an app can have an environment for regular use and one for testing.

- What is TDD? What are some benefits and drawbacks?
  TDD focuses on writing test first before code is written. A benefit would be reduced debugging time , and a drawback could be over testing code.

- What is the value of using JSONSchema for validation?
  Allows quicker validation and less repetition of validation code.

- What are some ways to decide which code to test?
  Core functions or most used/important sections of a code.

- What does `RETURNING` do in SQL? When would you use it?
  Returning allows the user to see the outcome of an Insert/Update/Delete operation.

- What are some differences between Web Sockets and HTTP?
  Web Sockets allow for a real time continous connection between client and server, while HTTP only connects per once a request/response has been sent.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  As I've had more experience with Flask at this time, I would generally prefer that over Express. Maybe I'll switch over to Express once I've spent more time diving into it.
