#!/bin/bash
echo '.gitignore' > .gitignore

#Take out ipfs daemon for now, testing js-ipfs
#chmod +x install-scripts/ipfs.sh
#sudo bash install-scripts/ipfs.sh

#Files for .gitignore which couldn't be added with install-scripts
chmod +x install-scripts/other_gitignores.sh
sudo bash install-scripts/other_gitignores.sh