
local opts = { noremap = true, silent = true }

vim.g.mapleader = " "

-- Shorten function name
local keymap = vim.keymap.set

-- Options
keymap("n", "<leader>pv", vim.cmd.Ex)

-- Resize with arrows
keymap("n", "<C-Up>", ":resize -2<CR>", opts)
keymap("n", "<C-Down>", ":resize +2<CR>", opts)
keymap("n", "<C-Left>", ":vertical resize -2<CR>", opts)
keymap("n", "<C-Right>", ":vertical resize +2<CR>", opts)


-- Buffer management
keymap("n", "<S-l>", ":bnext<CR>", opts)
keymap("n", "<S-h>", ":bprevious<CR>", opts)

keymap("n", "<leader>n", ":enew<CR>", opts) -- New buffer
keymap("n", "<leader>d", ":bd<CR>", opts) -- Delete buffer
