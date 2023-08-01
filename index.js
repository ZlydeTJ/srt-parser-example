import SrtParser from '@qgustavor/srt-parser'

const srt = `
1
00:00:00,000 --> 00:00:04,162
WWW.MY-SUBS.CO

1
00:00:15,175 --> 00:00:16,243
Master.

2
00:00:16,243 --> 00:00:18,011
I have news of Dr. Venture's

3
00:00:18,011 --> 00:00:19,445
latest invention.

4
00:00:24,448 --> 00:00:26,516
Yesterday's <i>New York herald,</i>

5
00:00:26,516 --> 00:00:28,117
<i>science section.</i>

6
00:00:28,117 --> 00:00:30,519
Thank you, Kikai.
`

const parser = new SrtParser()
const parsed = parser.fromSrt(srt)
console.log(parsed)