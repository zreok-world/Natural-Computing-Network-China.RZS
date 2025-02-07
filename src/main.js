console.log("Natural Computing Network v1");

const distributeTask = (task) => {
    console.log(`任务: ${task} 正在分配到网络中的节点`);
    // 模拟节点计算过程
    setTimeout(() => {
        console.log(`任务 ${task} 完成!`);
    }, 1000);
};

distributeTask("处理大数据");
