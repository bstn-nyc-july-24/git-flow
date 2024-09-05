# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Git commands we know

- `git init` - initialize local git repo in a directory
- `git commit [-m <message>]` - takes _staged_ changes puts in a package into the history of the repo
- `git add [.]` - add a file (or all files with `.`), i.e. starts tracking and/or changes the staged state of it
- `git checkout [-b] <branchname>` - by itself changes the branch to the specified branch. With `-b` creates the branch then checks it out
- `git push` - sends all commits to the remote repo that is linked.
- `git status` - see staged files, see what branch you're on and if its up to date with remote
- `git mv` - move a file or directory
- `git branch` - shows list of all branches, highlights one that you're on
- `git log` - shows commit history on the current branch
- `git merge <branch>` - merge a branch to your current branch
- `git remote ...` - link a local repo to a remote repo
- `git stash` - takes uncommited changes and stores them in a local cache
- `git pull` - (opposite of push) === git fetch && git merge
- `git reset [--soft || --hard] <commit hash>`
- `git rm` - remove files from working tree
