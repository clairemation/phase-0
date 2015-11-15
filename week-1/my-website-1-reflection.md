###Paste a link to your [USERNAME].github.io repository.
https://github.com/clairemation/clairemation.github.io

###Explain how to create a repository on GitHub and clone the repository to your local computer to a non-technical person.

Creating a new repository is easy.
####Start at your GitHub **profile page**.
Your GitHub profile page is located at `github.com/your-user-name`. (Replace `your-user-name` with your own user name.)

####Click **New repository**.
Are you on your profile page? Across the top is a light gray bar. On the far right of this you'll see three little icons in a row: a bell, a plus sign, and a tiny version of your avatar image. **Click the plus sign.** A box will pop up with two options. Click on the first one: **New repository**.

Now to...
####Fill in the details.
Clicking **New repository** will bring you to a new page titled "Create a new repository." There are several options to set.
**Owner** should already be you.
**Repository name, Description** and **Public** or **Private** -- Set these any way you like. Just don't use spaces in the name.
**Initialize this repository with a README** --Make sure this box is checked.
**Add .gitignore** should be set to **none**.
**Add a license** -- The license is a copyright form that enumerates what other people are allowed to do with your work. If you're not sure about this, you can just choose **MIT License** for now.

Finally...
####Click **Create repository**.
And there's your new repository!

Now you want to clone your new repository to your local computer.

####**Go to the folder** where you want to put the repository.
In your terminal, navigate to the folder using the `cd` command.

####Get your repository's clone URL.
Back in your browser, look to the lower-right part of the repository page for the clone URL. Click the clipboard icon to copy it.

####Clone the repository to your computer.
Back to the terminal. Type `git clone ` and then paste the URL you just copied, so it looks like this: `git clone your-clone-url`, but with your own URL in place of `your-clone-url`. Press enter.

Ta-dah! Git spits out some text and creates an identical clone of your GitHub repository!


###Describe what open source means.

Open source is a development model where instead of code being secret, proprietary, and illegal to copy, it is made freely viewable, usable, and remixable, often with the stipulation that whoever uses the code in their own project must also make their work available on the same terms.

###What do you think about Open Source? Does it make you nervous or protective? Does it feel like utopia?

I have to admit it makes me feel protective. Maybe this is coming from a creative, largely freelance-based field, where workers are frequently cheated out of compensation for the work they do for their livelihood. I guess I have to work to embrace the model, since collaboration and incremental improvement of other people's work is so much more central to coding.

###Assess the importance of using licenses.

Licenses are important because they enumerate exactly what someone is and isn't allowed to do with the code. They also allow a developer to promote further sharing of ideas by requiring any work incorporating his or her code to also be made available in open-source form.

###What concepts were solidified in the challenge? Did you have any "aha" moments? What did you struggle with?

The tough part continues to be keeping a model of all the branches and commits straight in my head. Maybe it would help to draw a diagram as I go--there's an "aha" moment, happening right now. I think just the repetition of the process is gradually solidifying the whole protocol in my head. I trust it'll continue to do so. I also think I should write down a process checklist. Each change to the master has eight steps (wow!): checkout new branch, make change, save, add, commit, push, pull request, merge. I can easily see myself forgetting to add before I commit, or to commit before I push.

###Did you find any resources on your own that helped you better understand a topic? If so, please list it.

I was mostly just Googling around and opening and closing bunches of tabs. Most of my answers were found on Stack Overflow or the documentation at https://git-scm.com.