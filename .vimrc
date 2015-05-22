
set nocompatible              " be iMproved, required
filetype off                             " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim

call vundle#begin()

" let Vundle manage Vundle, required
Plugin 'gmarik/Vundle.vim'

Plugin 'zeis/vim-kolor'
Plugin 'Shutnik/jshint2.vim'
Plugin 'scrooloose/syntastic'
Plugin 'marijnh/tern_for_vim'
Bundle 'myusuf3/numbers.vim'
Bundle 'moll/vim-node'
Bundle 'tpope/vim-surround'
Bundle 'spf13/vim-autoclose'
Bundle 'tpope/vim-fugitive'
Plugin 'MarcWeber/vim-addon-mw-utils'
Plugin 'tomtom/tlib_vim'
Plugin 'garbas/vim-snipmate'
Plugin 'majutsushi/tagbar'
Plugin 'tomtom/tcomment_vim'
Plugin 'Valloric/YouCompleteMe'
Plugin 'maksimr/vim-jsbeautify'

Plugin 'Plugin 'einars/js-beautify'

" Bundle 'Shougo/neocomplete.vim'


call vundle#end()                   " required

filetype plugin indent on    " required

colorscheme kolor

"set guifont=Consolas:h12

set number
set ignorecase
set incsearch
set smartcase
set showmatch
set autoindent
set ruler

set undolevels=1000
"set sw=2
"set ts=2
set tabstop=2 shiftwidth=2 expandtab

let jshint2_command='/home/pon/.nvm/v0.10.33/lib/node_modules/jshint/bin/jshint'
let jshint2_save = 1
let g:syntastic_check_on_open = 1
let g:syntastic_javascript_checkers = ["jshint", "jscs"]
let g:syntastic_javascript_jshint_exec='/home/pon/.nvm/v0.10.33/lib/node_modules/jshint/bin/jshint'

map <silent><F1> :JSHint<CR>
map <silent><F2> :/function<CR>
map <silent><F3> :Explore<CR>
map <silent><F4> :NumbersToggle<CR>
map <silent><F5> :w<CR>

".vimrc"
map <c-f> :call JsBeautify()<cr>

Plugin 'einars/js-beautify'

set filetype=javascript

set statusline=%F%m%r%h%w\ [FORMAT=%{&ff}]\ [TYPE=%Y]\[POS=%l,%v][%p%%]\ %{strftime(\"%d/%m/%y\ -\ %H:%M\")}
