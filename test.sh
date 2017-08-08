#!/bin/bash

start_time=`date +%s`
for d in ./packages/*/ ; do
    pushd $d
    if [ "$1" == "-u" ]; then
      npm run test-update
    else
      npm run test
    fi
    RESULT=$?
    if [ $RESULT -ne 0 ] && [ "$1" != "-u" ]; then
      exit $RESULT
    fi
    popd
done
end_time=`date +%s`
echo Total execution time `expr $end_time - $start_time` seconds
