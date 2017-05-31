function fn()
{
	var obj = {
		n: 1,
		s: 'abc',
		a: [1,{x:1, y:'ystr'}]
	},
	s = 'my string',
	n = 99;
	obj.more = n;
	s = s;
}
[fn]