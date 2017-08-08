#!/bin/bash

start_time=`date +%s`
for d in ./packages/*/ ; do
    pushd $d
    npm run test
    RESULT=$?
    if [ $RESULT -ne 0 ]; then
      exit $RESULT
    fi
    popd
done
end_time=`date +%s`
echo Total execution time `expr $end_time - $start_time` seconds
