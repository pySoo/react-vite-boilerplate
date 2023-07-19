1. Create the commit message template

- In this project, we'll use .gitmessage.txt

2. Configure Visual Studio Code to use the commit template file

   ```bash
   git config --global core.editor "code --wait"
   ```

3. Register the "git hist" command as an alias

   ```bash
   git config --global alias.hist "log --graph --all --pretty=format:'%C(yellow)[%ad]%C(reset) %C(green)[%h]%C(reset) | %C(white)%s %C(bold red){{%an}}%C(reset) %C(blue)%d%C(reset)' --date=short"
   ```

4. When you enter "git commit" in Visual Studio Code, the commit template file opens.

5. Uncomment and enter the commit message, then close the file to make the commit.
