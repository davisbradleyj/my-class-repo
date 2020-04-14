# Deploying to Heroku

1. Create new repo in github

2. Copy the link you would normally use to clone down your repo.

3. Run `git init` from project root in the command line.

4. Run `git remote add origin <paste link here>`

5. Run `git remote -v` (check if you’ve made the connection. You should see two things listed)

6. Run `heroku create <name>` (make the name original, so its not taken, or don’t enter a name and it’ll make a random one for you).

7. Run `git remote -v` (check if you’ve made the connection. You should see four things listed)

8. In your code, change this: `var PORT = 3000;` to this: `var PORT = process.env.PORT || 3000;`

9. Run `git add .`, `git commit -m "<message>"`, `git push heroku master`.

10. On Heroku's interface, log in, click on your project. Once you've made it to your project's home page, click on the `open app` button on the right hand side of the screen.
