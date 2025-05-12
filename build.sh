apt-get update >/dev/null
apt-get install -y locales >/dev/null
echo "en_US UTF-8" > /etc/locale.gen
locale-gen en_US.UTF-8
export LANG=en_US.UTF-8
export LANGUAGE=en_US:en
export LC_ALL=en_US.UTF-8

bundle exec jekyll build