echo "enter first"
read first
echo "enter second"
read second
echo " 1.additon"
echo " 2.substraction"
echo " 3.multiplication"
echo " 4.divide"
read ch
case $ch in
1) echo "result = $((a+b))";
2) echo "result = $((a-b))";
3) echo "result = $((a*b))";
4) echo "result = $((a/b))";
esac



