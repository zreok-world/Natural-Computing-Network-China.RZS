// 简单示例
function automate() {
    console.log("自动化脚本运行中...");
}

automate();

const fs = require('fs');

function cleanUpOldLogs() {
    const logsDir = './logs';
    fs.readdir(logsDir, (err, files) => {
        if (err) return console.error('无法读取日志目录', err);
        
        files.forEach(file => {
            if (file.endsWith('.log')) {
                fs.unlinkSync(`${logsDir}/${file}`);
                console.log(`已删除日志文件: ${file}`);
            }
        });
    });
}

cleanUpOldLogs();
