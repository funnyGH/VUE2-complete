set -x
echo "****************开始gulp dev********************"
project="relative-compensate"
rm -rf dist/
npm run prod
echo "****************gulp dev 结束********************"
cd dist
cd relative-compensate
expect -c "
  spawn scp -r . root@100.73.49.11:/data/dstnew/$project/
  expect {
    \"*assword\" {set timeout 300; send \"qwer1234\r\";}
    \"yes/no\" {send \"yes\r\"; exp_continue;}
  }
  expect eof"
echo "****************scp 结束 ********************"
cd ../
cd ../