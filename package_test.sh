if [ -n \"$CI\" ]; then jest --runInBand --coverage; else jest --coverage; fi
