## Working with submodules

After cloning the repo, from the root directory, run

```
git submodule update --init
```

This will fetch _some_ of the files from the `computational-setup` repository, but not all. Next, we're going to fetch and merge from the current version of main. 

```
git config -f .gitmodules submodule.computational-setup.branch main
git submodule update --remote
```

When you cd into the submodule and do `git status`, you should see that you're on branch `main`. Should that not be the case, run `git checkout main` (and update the repo as necessary) and you should be all set.