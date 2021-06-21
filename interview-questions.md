# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:You would need to update the Sightings model to include the foreign key. Although this goes in the Sightings model, it would be the index of the Animal model showing that the sighting was of X animal

  Researched answer:



2. Which RESTful routes must always be passed params? Why?

  Your answer:get, post, patch delete

  Researched answer:To bring the operations that can be applied to an object 



3. Name three rails generator commands. What is created by each?

  Your answer:rails g model: generates a model that has a name, and specific information within the model, rails g resource: generates a model that has paths and everything attached and completed upon creation, rails g migration: created a databse migration in which you can edit things in your database, or add things to it

  Researched answer:



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students     Displays all students in database     

method="GET"    /students/2  Displays the student with the index key of 2

method="GET"    /students/new returns a form to create a student

method="GET"    /students/edit/2    returns an edit form to change the data on the student at index key 2

method="POST"   /students/       Post will be used when we expect to have some change on the server

method="PATCH"  /students/2      Patch is used to update existing data in an existing student       at index key 2

method="DELETE" /students/2      Will delete the student at index key 2



5. As a developer, you want to make an application that will help you manage your to do list. To get started, you want to create the API. Create 10 user stories that will help you get your application started.

      1. As a developer I can create a to-do resource
      2. As a developer I can set parameters that have to be met to create the task
      3. As a developer I can create a migration to the database
      4. As a developer I can create new tasks
      5. As a developer I can show all tasks on to-do list
      6. As a developer I can update tasks if anything else is needed 
      7. As a developer I can delete tasks when they are complete
      8. As a developer I can see tasks for one day
      9. As a developer I can see to-dos for multiple days
      10. As a developer I can reset my task list to have zero tasks