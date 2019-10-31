# Testing testing only

## Setup

### If on macOS, setup node, npm, using brew

```
brew install node
```

### Install Gridsome ClI tool if you don't have one yet

```
npm install --global @gridsome/cli
```

### Clone this repo

```
# In the terminal, `cd` to the directory where you want to place the cloned repo.
git clone git@github.com:timhtheos/gridsome.git
```

### Install node modules

```
# Go to the the cloned dir
cd gridsome
npm install
```

## Develop

```
gridsome develop
```

## Status

Currently, I was able to query using graphql data from my google spreadsheet.

## Sample data

https://docs.google.com/spreadsheets/d/14LNq3OQHzzkYXw4_okg4-gAWyKuh2e911_qOP4VeGPo/edit#gid=0

## Sample query

```
query MyData {
  allGoogleSheet(sortBy: "date_unix", limit: 5, order: ASC) {
    edges {
      node {
        user
        dateUnix
        date
        desc
        dr
        cr
        bal
      }
    }
  }
}
```

## Todos

1. bla bla bla
2. xD
