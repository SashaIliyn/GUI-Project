#include <QObject>
#include <QThread>
class ShellThread : public QThread
{
Q_OBJECT
public:
    explicit ShellThread( QObject * parent = 0 );
    virtual ~ShellThread();
    virtual void run();
private:
    struct Impl;
    Impl * impl;
};
