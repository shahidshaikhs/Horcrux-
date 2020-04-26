# Github Notes

The purpose of Git is to manage a project, or a set of files, as they change over time. Git stores this information in a data structure called a repository. A git repository contains, among other things, the following: A set of commit objects.

- Store revisions in a project history in just one directory
- Revind to any any revision in the project
- Work on new features without messing up the main codebase
- Easily collaborate with other programmers

Github on the other hand is where you can host your files. Share your code with other developers.

# How does Github works?

Every project in Github is called as Repo (short for repository). It can be stored any where such as local or remote. They will be tracked by Git. Now, there is another concept called as Commits. Think of this as save files in your games. You can return to any save files whenever you want.

There are 3 stages to a repo.

1. Modified: Changes that are made to the files. These are not commited
2. Staging: Any changes files to the staging that you want to commit
3. Commited: Any files in the staging area are added to the commit when we make one

# Installation

1. Install Git from this link: https://git-scm.com/
2. Any text editor to edit your code files

# Login using Git

You will have to let Git know as to who you are. You can do the same by following the below set of coding instructions.

```git
git config --global user.name shahidshaikhs
```

```git
git config --global user.email shahid.sk27595@gmail.com
```

If you wish to check as to which user is currently loggin in, use the below command:

```git
git config user.name
```

# Creating a repository

```
git init
```

# Staging Files

To check as to which files are changed and which files are in the staging area

```
git status
```

1. To add files to the staging area:

   ```git
   git add <name of the file>

   //OR (to add all the files to staging)

   git add .
   ```

2. To remove files from the staging area:
   ```
   git rm --cached <name of the file>
   ```

# Commiting changes
Think of this as save files in your games.

```
git commit -m "fixes a bug in header"
```
// Make sure commit messages are very descriptive.

When you fire this command, you will receive an ID of that commit on the master branch.

Now, to see the commits that you have made, you can use the below command:

```
git log
```

OR

```
git log --oneline
```
To see the changes in brief

# Undoing things
There are 3 type of things which you can do there:

1. Checkout commit (very safe)
You can only checkout what code was like at a particular commit.
```
git checkout <id of the commit>
```

2. Revert commit (moderate)
You can undo the commit here.  This will not actually remove the commit, but add another commit which says 'Revert 'something something'' and remove the code which was present in that particular commit.
```
git revert <commit id>
```

3. Reset commit (unsafe)
Permanently go back in time to back to a commit. This will remove all the recent commits till the commit ID you specify. Remember when you do this, the changes that you made to the file will be unstaged basically and you can commit them again if required.
```
git reset <commit id>
```
OR

```
git reset <commid id> --hard
```
This command will not keep any changes in the unstaged area. It will remove every change made after the mentioned commit.

# Branches
In the above steps we were just working on the master branch. We can create a new branch, which will be like an isolated branch to test new code and later merge this branch with the master branch.

1. Create a new branch
    ```
    git branch branchName
    ```
2. See all branches
    ```
    git branch -a
    ```
3. Switch branch
    ```
    git checkout branchName

    OR

    git checkout -b branchName (This will create a new branch and also checkout the same)
    ```
4. Delete branch
    First go to the master branch, then delete the new branch
    ```
    git branch -d branchName
    ```

# Merge Branches
First we got to be on the branch that we want to merge into. Lets say you want to merge 'feature b' branch with Master, then you will have to first be on the master branch.

```
git merge <branch name>
```

# Pushing code to Github
1. Create a repo at Github
2. You will get a link, copy the same
3. ```git push https://github.com/shahidshaikhs/learning-github.git master```
4. Setup Alias ```git remote add origin https://github.com/shahidshaikhs/learning-github.git```

# Cloning
Use the below code to clone a repo on your local machine
```
git clone <repo link>
```

# Collaborating on Github
1. Clone project on your local machine
2. Create a new branch and push changes to the same branch
3. Create a pull request with this new branch

Also, always make sure that you pull from master before creating a new branch.
