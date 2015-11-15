###How does tracking and adding changes make developers' lives easier?

Tracking and adding changes in this way prevents version conflicts between team members, and allows developers to revert their project to an earlier state.

###What is a commit?

A commit is the saved state of a project.

###What are the best practices for commit messages?

Commit messages should be written in the imperative. They should have a header below 50 characters long, and a brief body that goes into further detail and is no more than 72 characters wide.

###What does the HEAD^ argument mean?

HEAD refers to the latest commit on the branch you currently have checked out.

###What are the 3 stages of a git change and how do you move a file from one stage to the other?

Stage 1: Untracked. Type "git add [filename]" to stage the file.
Stage 2: Staged/tracked. Type "git commit" to save the staged files to a new...
Stage 3: Commit. The saved snapshot of your branch.

###Write a handy cheatsheet of the commands you need to commit your changes?

Committing changes:
1- Save document in editor
2- git add [filename]
3- git commit

###What is a pull request and how do you create and merge one?

A pull request is step 1 in merging your branch with the next one down on GitHub. You create one by clicking the "Compare & pull request" button on a branch you just uploaded. Pick the base branch and the branch to be merged, and fill in the title and description. Click "Create pull request" to finalize.

You (or another developer) can then merge the changes. On the pull request page, click the "Merge pull request" button, and then confirm by clicking "Confirm merge."

###Why are pull requests preferred when working with teams?

Without having someone centrally overseeing and approving merges, you'd have the same kind of chaos as if you weren't using version control at all. You'd have multiple people coming in and merging their changes into the master branch and possibly breaking one another's work.