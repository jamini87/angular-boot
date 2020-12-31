LIB_VERSION=$(head -n 1 ./npm-pack-result/libs/angular-boot/latest-version.txt) # head takes the first lines from a file, and the -n parameter can be used to specify how many lines should be extracted!
mkdir -p ./npm-pack-result/libs/angular-boot/"$LIB_VERSION"
mv angular-boot-*-"$LIB_VERSION".tgz ./npm-pack-result/libs/angular-boot/"$LIB_VERSION"
cp ./npm-pack-result/libs -R /home/jafar/docker-volums/nginx-angularboot/usr/share/nginx/html
