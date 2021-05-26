# Timetag README

## Features

Adds command `timetag.timetag` which inserts a markdown header time string at the cursor like this one:

```
## 0526 Wed ################################
```

( Month Day Weekday ) 

**Note**: No default keybinding! The command needs to be binded manually, e.g. like this:

```
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": [
        "<leader>",
        "d"
      ],
      "commands": [
        "timetag.timetag"
      ]
    },
  ]
```

## Release Notes

### 0.1.0

unreleased testing of initial version