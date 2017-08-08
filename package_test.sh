if [ -n \"$CI\" ]; then jest --maxWorkers=4; else jest; fi
