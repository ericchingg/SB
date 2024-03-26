const fs = require('fs');
const process = require('process');
const axios = require('axios');
const url = require('url'); // Node's URL module to parse URLs

function readAndGetUrls(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        }
        // Split the file content by new line to get individual URLs
        const urls = data.split('\n').filter(Boolean); // Filter to remove any empty lines
        urls.forEach(getAndSave);
    });
}

async function getAndSave(website) {
    try {
        const resp = await axios.get(website);
        const hostname = new URL(website).hostname; // Extract hostname from URL
        fs.writeFile(hostname, resp.data, 'utf8', function(err) {
            if (err) {
                console.error(`Error writing to file ${hostname}: ${err}`);
            } else {
                console.log(`Page saved to ${hostname}`);
            }
        });
    } catch (error) {
        console.error(`Error fetching ${website}: ${error}`);
    }
}


readAndGetUrls(process.argv[2]);