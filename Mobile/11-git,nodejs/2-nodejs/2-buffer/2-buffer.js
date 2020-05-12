//创建 bufffer
// var buf = Buffer.alloc(10); // 初始化
// var buf = Buffer.allocUnsafe(10);// 没有做初始化
var buf = Buffer.from('i love you'); // from  来自  ASCII 表   数字标识的是字母在 ASCII 码表中的数字 16 进制表示


//操作 buf
//设置
//          ff  15 * 16 + 15 = 255
//         一个字节  8 个二进制位   0000 0000
//          1111 1111 =>    255
// buf[0] = 100;
// buf[1] = 120;
//读取
// var res = buf[2];

//查看 buffer 字符串表示形式
// console.log(buf.toString());//

//溢出
// buf[0] = 370;//  ‭0001 0111 0010‬   =>  0111 0010‬  =>  114

//中文
var buf = Buffer.from('一定不能掉线');// 6 个汉字   =>  18 个字节

console.log(buf);

