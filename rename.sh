#! zsh

sed -i "" -e "s/Backendapitemplatetest/$1Test/" -e "s/Backendapitemplate/$1/" .gitignore
sed -i "" "s/Backendapitemplatetest/$1Test/" Backendapitemplatetest/Backendapitemplatetest.csproj
sed -i "" "s/Backendapitemplate/$1/" Backendapitemplate/Backendapitemplate.csproj
sed -i "" "s/Backendapitemplatetest/$1Test/" Backendapitemplatetest/UnitTest1.cs
sed -i "" "s/Backendapitemplate/$1/" Backendapitemplate/Class1.cs Backendapitemplatetest/UnitTest1.cs
sed -i "" "s/Backendapitemplate/$1/g" Backendapitemplatetest/Backendapitemplatetest.csproj
sed -i "" "s/Backendapitemplatetest/$1Test/g" Backendapitemplate.sln
sed -i "" "s/Backendapitemplate/$1/g" Backendapitemplate.sln

mv Backendapitemplatetest/Backendapitemplatetest.csproj Backendapitemplatetest/$1Test.csproj
mv Backendapitemplate/Backendapitemplate.csproj Backendapitemplate/$1.csproj
mv Backendapitemplatetest $1Test
mv Backendapitemplate $1
mv Backendapitemplate.sln $1.sln
mv .vs/Backendapitemplate .vs/$1

rm README.md
rm rename.sh
git add .
git commit -m "chore: rename project to $1"
