#<center>Contos7安装git</center>
###1、检查是否已安装git
    git --version
###2、安装git
    yum install -y git
###3、创建git用户组和用户
    groupadd git
    useradd git -g git
    passwd  git
>groupadd git -- 创建用户组  
>useradd git -g git -- 创建用户并将此用户加入到git组  
>passwd  git -- 设置密码
###4、禁止该git用户使用shell登录系统
    vi /etc/passwd
>按i进入编辑模式，在最后一行将git用户修改成以下配置

    git:x:1000:1000::/home/git:/usr/bin/git-shell

>按ESC退出编辑模式，输入 “:wq” 保存并且退出vi模式
###5、创建证书登录
>收集所有需要登录的用户的公钥，公钥位于id\_rsa.pub文件中，把我们的公钥导入到/home/git/.ssh/authorized_keys文件里，一行一个。如果没有该文件创建它：

    cd /home/git/
    mkdir .ssh
    chmod 755 .ssh
    touch .ssh/authorized_keys
    chmod 644 .ssh/authorized_keys
    chown -R git:git .ssh
###6、修改配置文件
    vi /etc/ssh/sshd_config
>按i进入编辑模式，打开RSA认证  
  
    RSAAuthentication yes     
    PubkeyAuthentication yes     
    AuthorizedKeysFile  .ssh/authorized_keys
>http://www.cnblogs.com/Leroscox/p/9627809.html  
>按ESC退出编辑模式，输入 “:wq” 保存并且退出vi模式  

>修改配置之后，需要重启sshd

    systemctl restart sshd.service
>可以通过这个命令去测试SSH是否可连接：

     ssh -T git@192.168.34.130
>然后在服务器，可以通过这个命令查看ssh状态

    systemctl status sshd.service
###7、初始化Git仓库
>首先我们选定一个目录作为Git仓库，假定是/home/gitrepo/runoob.git，在/home/gitrepo目录下输入命令：

    cd /home
    mkdir gitrepo
    chown git:git gitrepo/
    cd gitrepo
    git init --bare runoob.git
>以上命令Git创建一个空仓库，服务器上的Git仓库通常都以.git结尾  

>然后，把仓库所属用户改为git：

    chown -R git:git runoob.git


https://www.cnblogs.com/phpstudy2015-6/p/9153497.html