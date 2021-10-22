const linksSocialMedia = {
  youtube: 'Zigsam',
  github: 'zigfridExe',
  instagram: 'zigsam.exe',
  facebook: 'everton.romansini',
  twitter: 'zigsam'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  alert(url)
}

function getGithubProfileInfos()