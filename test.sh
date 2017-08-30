#!/bin/bash
line="\033[90m============================================================\033[0m"
start_time=`date +%s`
for d in ./packages/*/ ; do
    echo
    echo -e $line
    echo -e "\033[1m$d\033[0m"
    pushd $d > /dev/null
    echo -e $line
    if [ -e package.json ]; then
      if [ "$1" == "-u" ]; then
        yarn run test-update
      else
        yarn run test
      fi
      RESULT=$?
      if [ $RESULT -ne 0 ] && [ "$1" != "-u" ]; then
        exit $RESULT
      fi
    else
      echo "No package.json found in package $d. Skipping..."
    fi
    popd > /dev/null
done
end_time=`date +%s`
echo Total execution time `expr $end_time - $start_time` seconds
