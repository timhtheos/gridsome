// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: '14LNq3OQHzzkYXw4_okg4-gAWyKuh2e911_qOP4VeGPo', 
        apiKey: 'AIzaSyAdNysYqX0QfOQih0hzAF-CGxe9x4JEWKA',
        type: 'googleSheet',
    }
    }

  ]
}
