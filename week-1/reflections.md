#1.1 Think About Time Reflection

I learned the most about the Pomodoro method. I’d already heard of it, but wasn’t familiar with some of the specifics, like the length of a pomodoro or a break, or the practice of using part of a pomodoro to review your efficiency. Timeboxing seems to be the general concept of structuring your work around time milestones rather than work milestones, e.g. working however long it takes to complete a unit of work. Currently my time-management system is something like “Just do it, as much as I can,” which really means procrastinate like mad, and then when the deadline nears, work dozens of hours in a row in a frothing state of hyperfocus with hardly a bathroom break, let alone sleep. I wouldn’t say this works very well for my productivity or my health. I’d like to start practicing the Pomodoro technique, but I’ll have to modify or hybridize it somewhat because when I am working well, it generally means I’ve hit a flow state and won’t want to stop after just 25 minutes. I want to accommodate that when it happens, and perhaps acquire a few tricks for prioritizing my tasks in a way that will promote it.

#1.2 The Command Line Reflection

1. A shell is a program that gives you a command-line interface for interacting with your Unix system. Bash is a popular shell that features its own scripting language.

2. Xargs was tough to get a handle on. I was trying to enter the command ls -l by putting -l in a text document and using xargs to pass that to ls. For a while I had it all backwards, till it finally clicked xargs needed to be on the receiving end of an output pipe. It finally worked when I catted the text out first and piped the results to xargs on the right.

3. Yes.

4. Grep seems very useful; I already found myself using it a lot just during the exercises and while experimenting afterward. But the directory commands (pwd, ls, cd) are probably the most essential. You can’t do anything if you can’t even find the application or file you want to use.

5.

pwd - print working directory

ls - list directory contents

mv - move file

cd - change directory

../ - one directory up from the current one

touch - create a file or update an existing file’s “modified” time

mkdir - make directory

less - display text one page at a time

rmdir - remove directory

rm - remove file

help - help with shell commands

#1.4 Forking and Cloning Reflection

###HOW TO CREATE A NEW REPO, FORK A REPO, AND CLONE A REPO

Using git is like drawing with multiple layers of scratch paper. The idea is that you never sit down and mess directly with the original. You branch off a working copy to apply your changes to. Only once you’re satisfied with what you’ve done do you transfer the changes back to the master. So to work on a project on GitHub, you’re going to branch off a working copy onto your own computer.

First, you need a repository on GitHub. You can start a new one, or fork (copy) an existing one.

-To create a new repo, first open your GitHub profile. Click the + icon in the upper-right corner of the screen, and select New Repository from the drop-down menu. Now you’re presented with the settings for your new repo. Set them to your liking and click “Create repository.”

-To fork an existing repo, simply navigate to it, click “Fork” in the upper-right corner of the work area, and select where you want it to go.

>•Why would you fork a repo instead of creating a new one?
>You might want to develop your own modified version of an open-source app, or simply study someone else’s code.

Now that you have a repository on GitHub, you want to clone it to your own computer.

Navigate to the repo. Find the clone URL on the right-hand sidebar and copy it. Then, in Terminal, cd to the directory where you want to place the repo. type “git clone [your repo’s clone URL]” and wait a second while git copies over the files.



WHAT STRUGGLES DID YOU HAVE SETTING UP GIT AND GITHUB? WHAT DID YOU LEARN IN THE PROCESS?

I’m finding the whole thing fairly confusing, mostly because it’s hard to keep track of all the different layers of stuff in git. There’s the files that aren’t being tracked, the files that are being tracked to commit but aren’t committed yet, and then the files finally committed to the branch… and then there’s multiple commits you can move forward and backward between, and multiple branches… Navigating that in a text medium feels like bumping around in the dark. But it feels like what I learned (or started learning) IS the skill to juggle that stuff in my head. It’s tough wrapping my head around now, but I think once I get over the hump, it’s a sensibility that will be useful no matter what I’m working on.