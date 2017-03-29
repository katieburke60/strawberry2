To Dos

V1: Initial query and return information

1. Get the high level bill query data from the view
- We could filter these by relevance

2. Return data to the user
- AJAX request return
- View page for the information with appropriate tags
- Iterate through the information so that we get the key information we need (title, number, last action)
- Put in the appropriate HTML tags onto the index.html page
- Serve it into HTML to give back to the user.

V2: In depth query and return information
3. Get detailed bill query from user
- When they click on something of a certain class

4. Create a new bill instance with that data (once they make a detailed bill request)

5. Check whether the bill is already in the store or not

6. If it is not then insert the new bill into the store

7. Display the data for the specific bill

-
V1 Addition
1. Actually create bill objects after the user makes the first requests.

 --
 Questions
 1. Iterating over a nested hash
  for (var i in obj)


Jeff
1. controllers
2. routes
- click on sometihng
- when this happens do this


1. For each on the search query results to create new instances of the detailed
   views (automatic query based on the search and then you create new instances).
2. If store.bills includes then do not create (find to avoid repeating)

3. Category -- need them to be objects first

-- On the return you could get interesting views with a nested search

--
Additional Features

1. Comments
2. Up / down

--
0. 1-js_objects (Mon AM)

Teacher
1. Object (Mon PM)
2. MVC (Tue) - halfway finished
3. review (Wed)

Music Salsa
1. AJAX
2. OO-Ajax
3. oo-adapters
4. Promises

Page for each state
- All the categories and search (can either choose the categories and search)
- state.categories [categories is committee names] -- categories belong to a state.
  State name @categories = state.categories
  *One layout and data

Twitter / local news feeds with API searches for the bills
--
Longer term
- Categorization across states for areas of emphasis
