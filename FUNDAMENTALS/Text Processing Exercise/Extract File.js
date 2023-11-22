function solve(path){
    let fileInfo = path.split('\\').pop();
    let lastDotIdx = fileInfo.lastIndexOf('.');

    let fileName = fileInfo.slice(0, lastDotIdx);
    let fileExtension = fileInfo.slice(lastDotIdx + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}}`)

}
solve('C:\\Internal\\training-internal\\Template.pptx')
// solve('C:\\Projects\\Data-Structures\\LinkedList.cs')